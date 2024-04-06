import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { User } from '../../../../src/model/entity/users';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<void> {
    const user1 = new User();
    user1.id = 1;
    user1.firstName = 'Mohammad Abir';
    user1.lastName = 'Sarker';
    user1.age = 24;
    
    const manager = dataSource.createEntityManager();
    
    await manager.getRepository(User).insert(user1);
  }
}