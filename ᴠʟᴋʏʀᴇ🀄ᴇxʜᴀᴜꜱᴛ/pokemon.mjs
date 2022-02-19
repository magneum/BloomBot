Text = `
╔⧉༻ 🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║
║💫 *Name:* ${pkmn.names.en}
║〽️ *Pokedex ID:* ${data.id}
║⚖ *Weight:* ${pkmn.weight_eu}
║🔆 *Height:* ${pkmn.height_eu}
║🌟 *Base Experience:* ${data.base_experience}
║📛 *Abilities:* ${pkmn.abilities[0].name}, ${pkmn.abilities[1].name}
║🎀 *Type:*  ${pkmn.types}
║🌸 *Evolved from:* ${pkmn.evolution_from}
║📈 *Leveling Rate:* ${pkmn.leveling_rate}
║💮 *Colour:* ${pkmn.color}
║🌸 *Evolved from:* ${pkmn.evolution_from}
║✳ *HP:* ${data.stats[0].base_stat}
║⚔ *Attack:* ${data.stats[1].base_stat}
║🔰 *Defense:* ${data.stats[2].base_stat}
║☄ *Special Attack:* ${data.stats[3].base_stat}
║🛡 *Special Defense:* ${data.stats[4].base_stat}
║🎐 *Speed:* ${data.stats[5].base_stat}
║💬 *Summary:* ${pkmn.pokedex_entries.Gold.en}
╚════════════╝`;