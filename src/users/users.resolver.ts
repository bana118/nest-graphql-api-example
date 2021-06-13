import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user';

const userTable = [
  {
    id: 101,
    name: 'Alice',
  },
  {
    id: 102,
    name: 'Bob',
  },
  {
    id: 103,
    name: 'Caroline',
  },
  {
    id: 104,
    name: 'Dave',
  },
];

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return userTable;
  }
}
