class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: TypeScript verssion is ${this.version}`;
  }
};

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
};

class Car2 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) { }
};

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  constructor() {
    this.go();
  }

  private go() {
    console.log('Go');
  }
};

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go(); // --- error: only in class Animal
  }
};

const cat = new Cat();

// cat.voice; // --- error: only in classes Animal or Cat

abstract class Component {
  abstract render(): void;
  abstract info(): string;
};

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
};
