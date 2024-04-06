import { plural } from 'pluralize';
import { DefaultNamingStrategy, Table } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class NamingStrategy extends DefaultNamingStrategy {
  public tableName(targetName: string, userSpecifiedName: string | undefined): string {
    if (userSpecifiedName != null) {
      return userSpecifiedName;
    }
    return snakeCase(plural(targetName));
  }

  public columnName(propertyName: string, customName: string | undefined, embeddedPrefixes: string[]): string {
    return snakeCase(customName ?? propertyName);
  }

  public relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }

  public primaryKeyName(tableOrName: string | Table, columnNames: string[]): string {
    if (typeof tableOrName === 'string') {
      return `${snakeCase(tableOrName)}__pk`;
    }
    const sep = tableOrName.name.split('\\.');
    return `${sep[sep.length - 1]}__pk`;
  }
}
