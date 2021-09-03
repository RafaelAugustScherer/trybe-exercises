const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 3,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

/* 1.1 */

const dragonAttack = (monster) => {
    return Math.floor(Math.random() * monster.strength) + 15
}

/* 1.2 */

const warriorAttack = (player) => {
    let damage = Math.floor(Math.random() * (player.strength * player.weaponDmg));

    if (damage < player.strength) damage = player.strength;
    return damage;
}

/* 1.3 */

const mageAttack = (player) => {
    let mana = player.mana;
    if (mana < 15) return { damage: 'Not enough mana', mana };

    let damage = Math.floor(Math.random() * player.intelligence) + player.intelligence;
    mana -= 15;

    return { damage, mana };
}

const gameActions = {
    warriorPlay: (warriorObj, dragonObj, attack) => {
        let damage = attack(warriorObj);

        warriorObj.damage = damage;
        dragonObj.healthPoints -= damage;
        if (dragonObj.healthPoints < 0) dragonObj.healthPoints = 0
    },
    magePlay: (mageObj, dragonObj, attack) => {
        let attackObj = attack(mageObj);

        mageObj.damage = attackObj.damage;
        mageObj.mana = attackObj.mana;

        dragonObj.healthPoints -= attackObj.damage;
        if (dragonObj.healthPoints < 0) dragonObj.healthPoints = 0
    },
    dragonPlay: (dragonObj, warriorObj, mageObj, attack) => {
        let damage = attack(dragonObj);

        dragonObj.damage = damage;
        warriorObj.healthPoints -= damage;
        mageObj.healthPoints -= damage;
        if (warriorObj.healthPoints < 0) warriorObj.healthPoints = 0
        if (mageObj.healthPoints < 0) mageObj.healthPoints = 0
    },
    logTurnStats: function (members) {
        let curWarrior = members.warrior;
        let curMage = members.mage;
        let curDragon = members.dragon;

        let end = () => this.checkEnd([curWarrior, curMage], curDragon);
        if (end()) return false;
    
        console.log('\n-- The turn was started! --\n');
        if (curWarrior.healthPoints < 1) {
            console.log(`-> The Warrior is down! It is not capable of attacking anymore`)
        } else {
            this.warriorPlay(curWarrior, curDragon, warriorAttack);
            console.log(`-> The Dragon was attacked by the Warrior and suffered ${curWarrior.damage} of damage. Its life has been reduced to ${curDragon.healthPoints}`);
        };
        if (end()) return false;

        if (curMage.healthPoints < 1) {
            console.log(`-> The Mage is down! It is not capable of attacking anymore`)
        } else if (curMage.mana < 15) {
            console.log(`-> The Mage Mana is over! It is not capable of attacking anymore`)
        } else {
            this.magePlay(curMage, curDragon, mageAttack);
            console.log(`-> The Dragon was attacked by the Mage and suffered ${curMage.damage} of damage. Its life has been reduced to ${curDragon.healthPoints}`);
        };
        if (end()) return false;

        this.dragonPlay(curDragon, curWarrior, curMage, dragonAttack);
        console.log(`-> The Warrior and the Mage were attacked by the Dragon! They both suffered ${curDragon.damage} of damage.`);
        console.log(`-> Warrior is currently with ${curWarrior.healthPoints} of health`);
        console.log(`-> Mage is currently with ${curMage.healthPoints} of health.`);
        if (end()) return false;

        return true;
    },
    checkEnd: (players, monster) => {
        let countDeath = 0
        players.forEach((player) => {
            if (player.healthPoints < 1) countDeath += 1
        })
        if (countDeath === 2) {
            console.log('\n-> The dragon won the battle :(');
            return true
        };
        if (monster.healthPoints < 1) {
            console.log('\n-> The players won the battle!!!');
            return true
        };

        return false
    }
};

while(gameActions.logTurnStats(battleMembers)) {
    gameActions.logTurnStats(battleMembers);
}
