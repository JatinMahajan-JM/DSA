class HashMap {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const PRIME = 71;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (key === this.keyMap[index][i][0]) return this.keyMap[index][1];
    }
    return undefined;
  }
}

const hashMap = new HashMap();
hashMap.set("Dragon", "Charizard");
hashMap.set("Trainer", "Ash");
hashMap.set("PokeGym", "Yehski");
hashMap.set("GymPoke", "Yehski");
console.log(hashMap.get("PokeGym"));
console.dir(hashMap);
