type Words = {
  [key: string]: string; // key로 뭐가 올지 모르지만 타입은 정해두고 싶을때
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    } else {
      console.log("이미 등록된 단어입니다. 변경을 원하시면 modify메서드 사용.");
    }
  }
  def(term: string) {
    return this.words[term];
  }
  modify(word: Word) {
    if (word.term in this.words) {
      this.words[word.term] = word.def;
      console.log("변경완료");
    }
  }
  remove(word: Word) {
    if (word.term !== undefined) {
      console.log("삭제되었습니다.");
      delete this.words[word.term];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const kimchi2 = new Word(
  "kimchi",
  "배추 등 채소를 이용한 한국의 전통음식이며 어쩌구저저구"
);

const dict = new Dict();

dict.add(kimchi);
console.log(dict.def("kimchi"));
dict.modify(kimchi2);
console.log(dict.def("kimchi"));
dict.remove(kimchi);
console.log(dict.def("kimchi"));
