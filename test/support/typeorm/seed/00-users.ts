import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { User } from '../../../../src/model/entity/users';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<void> {
    const manager = dataSource.createEntityManager();

    const user1 = new User();
    user1.id = 1;
    user1.firstName = 'Mohammad Abir';
    user1.lastName = 'Sarker';
    user1.age = 24;
    user1.gender = 'Male';
    user1.email = 'abir@gmail.com';
    user1.profession = 'software engineer';
    
    
    await manager.getRepository(User).save(user1);

    const data = [
      '2, Greg, Kuvalis, Greg10@gmail.com, 21, Male, Global Infrastructure Analyst',
      '3, Zachary, Bartell, Zachary.Bartell@gmail.com, 22, Male, Principal Paradigm Technician',
      '4, Rudolph, Abbott, Rudolph_Abbott40@gmail.com, 46, Female, Central Metrics Developer',
      '5, Tanya, Ruecker-Parisian, Tanya.Ruecker-Parisian@hotmail.com, 62, Male, Regional Assurance Specialist',
      '6, Sophie, Hintz, Sophie.Hintz@yahoo.com, 33, Female, Forward Group Orchestrator',
      '7, Sara, Bode, Sara5@yahoo.com, 65, Female, International Web Architect',
      '8, Marguerite, Franey, Marguerite.Franey@gmail.com, 63, Female, Customer Program Engineer',
      '9, Moses, Klein, Moses.Klein@hotmail.com, 66, Male, Human Assurance Architect',
      '10, Dana, Quitzon, Dana13@yahoo.com, 47, Female, Product Web Assistant',
      '11, Christine, Konopelski, Christine.Konopelski@hotmail.com, 22, Male, Product Markets Representative',
    ];

    for (const d of data) {
      const [
        id,
        firstName,
        lastName,
        email,
        age,
        gender,
        profession,
      ] = d.split(', ');

      const user = new User();
      user.id = parseInt(id, 10);
      user.firstName = firstName;
      user.lastName = lastName;
      user.age = parseInt(age, 10);
      user.gender = gender;
      user.email = email;
      user.profession = profession;

      await manager.getRepository(User).save(user);
    }
  }
}