/**
 * # 리스코프 치환 원칙
 * 상위 타입의 객체를 하위 타입의 객체로 치환해도 상위 타입을 사용하는 프로그램은 정상적으로 동작해야 한다.
 */

class Employee {
  protected permissions: Set<string> = new Set<string>();

  public hasPermission(permissionName: string): boolean {
    return this.permissions.has(permissionName);
  }
  public addPermission(permissionName: string): void {
    this.permissions.add(permissionName);
  }
}

class Cashier extends Employee {
  public addPermission(permissionName: string): void {
    this.permissions.add(permissionName);
  }
}

function isPersonAllowedToDeleteProducts(person: Employee) {
  return person.hasPermission("deleteProducts");
}

// Employee ✅
const employee = new Employee();
employee.addPermission("deleteProducts");
const allowed = isPersonAllowedToDeleteProducts(employee);
console.log({ allowed });

// Cashier ✅
const cashier = new Cashier();
cashier.addPermission("deleteProducts");
const allowed2 = isPersonAllowedToDeleteProducts(cashier);
console.log({ allowed2 });

/**
 * 리스코프 치환 원칙 위배 코드
 */
//  class Employee {
//   protected permissions: any = new Set<string>();

//   public hasPermission(permissionName: string): boolean {
//     return this.permissions.has(permissionName);
//   }
//   public addPermission(permissionName: string): void {
//     this.permissions.add(permissionName);
//   }
// }

// class Cashier extends Employee {
//   protected permissions: string[] = [];

//   public addPermission(permissionName: string): void {
//     this.permissions.push(permissionName);
//   }
// }

// function isPersonAllowedToDeleteProducts(person: Employee) {
//   return person.hasPermission("deleteProducts");
// }

// // exec

// // Employee ✅
// const employee = new Employee();
// employee.addPermission("deleteProducts");
// const allowed = isPersonAllowedToDeleteProducts(employee);
// console.log({ allowed });

// // Cashier ❌ (this.permissions.has is not a function)
// const cashier = new Cashier();
// cashier.addPermission("deleteProducts");
// const allowed2 = isPersonAllowedToDeleteProducts(cashier);
// console.log({ allowed2 });
