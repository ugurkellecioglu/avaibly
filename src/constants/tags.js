import colors from "./colors"
import tagTexts from "./tagTexts"
const tags = [
    {
        color: colors.green,
        text: tagTexts.available,
        active: false,
    },
    {
        color: colors.yellow,
        text: tagTexts.availableSoon,
        active: false,
    },
    {
        color: colors.red,
        text: tagTexts.notAvailable,
        active: false,
    },
]

export default tags