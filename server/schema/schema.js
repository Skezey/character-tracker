const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql
const axios = require('axios')

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    allignment: { type: GraphQLString },
    race: { type: GraphQLString },
    class: { type: GraphQLString },
    level: { type: GraphQLInt },
    strength: { type: GraphQLInt },
    dexterity: { type: GraphQLInt },
    consitution: { type: GraphQLInt },
    intelligence: { type: GraphQLInt },
    wisdom: { type: GraphQLInt },
    charisma: { type: GraphQLInt }
  }
})

const SpellType = new GraphQLObjectType({
  name: 'Spell',
  fields: {
    _id: { type: GraphQLString },
    index: { type: GraphQLString },
    name: { type: GraphQLString },
    desc: { type: GraphQLString }
  }
})

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: {
    _id: { type: GraphQLString },
    index: { type: GraphQLString },
    name: { type: GraphQLString },
    equipment_category: { type: GraphQLString },
    weapon_category: { type: GraphQLString },
    weapon_range: { type: GraphQLString },
    category_range: { type: GraphQLString }
  }
})



const ClassType = new GraphQLObjectType({
  name: "CharacterClass",
  fields: {
    _id: {type: GraphQLString},
    index: {type: GraphQLString},
    name: {type: GraphQLString},
    hit_die: { type: GraphQLInt}
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // character: {
    //   type: CharacterType,
    //   args: { id: { type: GraphQLString }},
    //   //character, args
    //   resolve(parentValue, args) {
    //     return _.find(characters, { id: args.id })
    //   }
    // },
    spell: {
      type: SpellType,
      args: { index: { type: GraphQLString }},
      resolve(parentValue, { index }) {
        return axios.get(`http://www.dnd5eapi.co/api/spells/${index}`)
        .then(res => res.data)
      }
    },
    item: {
      type: ItemType,
      args: { index: { type: GraphQLString }},
      resolve(parentValue, { index }) {
        return axios.get(`http://www.dnd5eapi.co/api/equipment/${index}`)
        .then(res => res.data)
      }
    },
    character_class: {
      type: ClassType,
      args: { index: { type: GraphQLString }},
      resolve(parentValue, { index }) {
        return axios.get(`http://www.dnd5eapi.co/api/classes/${index}`)
        .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
