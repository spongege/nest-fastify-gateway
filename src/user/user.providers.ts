import { User } from './user.mongo.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (AppDataSource) => {
      console.log(AppDataSource);
      return await AppDataSource.getRepository(User);
    },
    inject: ['MONGODB_DATA_SOURCE'],
  },
];
