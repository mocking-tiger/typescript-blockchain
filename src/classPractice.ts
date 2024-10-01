abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}

const jyp = new Player("jun-yong", "park", "JYP");

// console.log(jyp.firstName);
// console.log(jyp.nickname);
console.log(jyp.getFullName());
