import { Role } from '@prisma/client';

export interface AuthRequest extends Request {
  user: {
    id: number;
    name: string;
    role: Role;
  };
}
