import { FamilyType, HandleType, Pet, Sex } from "../../app/models"

export const petsDummy: Pet[] = [
  {
    id: 1,
    createAt: "2023-03-05T12:40:09.563Z",
    updatedAt: "2023-03-05T12:40:09.563Z",
    name: "초코",
    species: {
      id: 1,
      createAt: "2023-03-05T12:40:09.563Z",
      updatedAt: "2023-03-05T12:40:09.563Z",
      name: "푸들",
      familyType: FamilyType.DOG,
    },
    age: 3,
    sex: Sex.FEMALE,
    images: [],
    weight: 10,
    petType: HandleType.SMALL,
    isNeutralizated: true,
    birthday: "string",
    desc: "string",
  },
  {
    id: 2,
    createAt: "2023-03-05T12:40:09.563Z",
    updatedAt: "2023-03-05T12:40:09.563Z",
    name: "우유",
    species: {
      id: 2,
      createAt: "2023-03-05T12:40:09.563Z",
      updatedAt: "2023-03-05T12:40:09.563Z",
      name: "비숑",
      familyType: FamilyType.DOG,
    },
    age: 3,
    sex: Sex.FEMALE,
    images: ["https://files.slack.com/files-tmb/T035QQ6AYK0-F05ES2U7K88-5deb92abf9/image_720.png"],
    weight: 10,
    petType: HandleType.SMALL,
    isNeutralizated: false,
    birthday: "string",
    desc: "string",
  },
  {
    id: 3,
    createAt: "2023-03-05T12:40:09.563Z",
    updatedAt: "2023-03-05T12:40:09.563Z",
    name: "자두",
    species: {
      id: 3,
      createAt: "2023-03-05T12:40:09.563Z",
      updatedAt: "2023-03-05T12:40:09.563Z",
      name: "코숏",
      familyType: FamilyType.CAT,
    },
    age: 3,
    sex: Sex.MALE,
    images: [],
    weight: 10,
    petType: HandleType.SMALL,
    isNeutralizated: true,
    birthday: "string",
    desc: "string",
  },
  {
    id: 4,
    createAt: "2023-03-05T12:40:09.563Z",
    updatedAt: "2023-03-05T12:40:09.563Z",
    name: "구름이",
    species: {
      id: 4,
      createAt: "2023-03-05T12:40:09.563Z",
      updatedAt: "2023-03-05T12:40:09.563Z",
      name: "터키시앙고라",
      familyType: FamilyType.CAT,
    },
    age: 14,
    sex: Sex.MALE,
    images: [],
    weight: 10,
    petType: HandleType.MEDIUM,
    isNeutralizated: true,
    birthday: "string",
    desc: "string",
  },
  {
    id: 5,
    createAt: "2023-03-05T12:40:09.563Z",
    updatedAt: "2023-03-05T12:40:09.563Z",
    name: "상츄",
    species: {
      id: 5,
      createAt: "2023-03-05T12:40:09.563Z",
      updatedAt: "2023-03-05T12:40:09.563Z",
      name: "시츄",
      familyType: FamilyType.DOG,
    },
    age: 3,
    sex: Sex.MALE,
    images: [],
    weight: 10,
    petType: HandleType.LARGE,
    isNeutralizated: true,
    birthday: "string",
    desc: "string",
  },
]
