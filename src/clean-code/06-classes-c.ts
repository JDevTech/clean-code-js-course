(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.role = role;
      this.email = email;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    role: string;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings {
    public user: User;
    public person: Person;
    public settings: Settings;

    constructor({
      email,
      role,
      name,
      gender,
      birthdate,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.user = new User({ email, role });
      this.person = new Person({ name, gender, birthdate });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({ userSettings });
})();
