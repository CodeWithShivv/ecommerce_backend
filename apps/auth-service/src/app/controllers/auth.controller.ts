import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { Types } from 'mongoose';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

export const registerUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const { name, email, password } = req.body as any;

  const userExists = await User.findOne({ email });

  if (userExists) {
    reply.status(400).send('User already exists');
    return;
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  
  if (user) {
    reply.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id.toString()),
    });
  } else {
    reply.status(400).send('Invalid user data');
  }
};

export const authUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = req.body as any;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    reply.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id.toString()),
    });
  } else {
    reply.status(401).send('Invalid email or password');
  }
};
