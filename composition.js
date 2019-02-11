const canFight = (state) => ({
    fight: () => {
        console.log(`${state.name} takes a mighty swing!`);
        state.stamina--;
    }
})
const canCast = (state) => ({
    cast: () => {
        console.log(`${state.name} casts a fireball`);
        state.mana--;
    }
})

const canSpell = (state) => ({
    spell: () => {
        console.log(`${state.name} spells a fire!`);
        state.stamina--;
    }
})

const Fighter = (name,stamina = 100) => {
    let state = {
        name,
        stamina
    }

    return Object.assign(state,canFight(state))
}

const zapper = Fighter("zapper");
zapper.fight();
console.log(zapper.stamina)