interface Printable {
  print(): void;
}

abstract class User {
  private static nextId = 1000;
  readonly id: number;
  email: string;
  private password: string;

  constructor(email: string, password: string) {
      this.id = User.nextId++;
      this.email = email;
      this.setPassword(password);
  }

  get passwordPreview(): string {
      return this.password[0] + "*".repeat(this.password.length - 2) + this.password[this.password.length - 1];
  }

  changePassword(newPassword: string): void {
      if (newPassword.length < 6) {
          console.log("Password too short!");
      } else {
          this.password = newPassword;
      }
  }

  protected setPassword(password: string): void {
      if (password.length < 6) {
          console.log("Password too short!");
          this.password = "";
      } else {
          this.password = password;
      }
  }

  abstract showProfile(): void;
}

class Admin extends User implements Printable {
  isActive: boolean;

  constructor(email: string, password: string, isActive: boolean = true) {
      super(email, password);
      this.isActive = isActive;
  }

  showProfile(): void {
      if (this.isActive) {
          console.log(`https://softserve/profile/${this.id}`);
      } else {
          console.log("https://softserve/login");
      }
  }

  print(): void {
      console.log("Admin");
  }
}

const admin = new Admin('admin@gmail.com', 'Qwerty');
admin.changePassword('Weak'); 
console.log(admin.passwordPreview); 
admin.changePassword('Super-Pass');
console.log(admin.passwordPreview); 
admin.showProfile(); 
admin.print(); 
