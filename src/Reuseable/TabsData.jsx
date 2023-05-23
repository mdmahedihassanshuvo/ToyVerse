import Action from "../Components/Utilities/Action/Action";
import American from "../Components/Utilities/American/American";
import Barbie from "../Components/Utilities/Barbie/Barbie";

const tabsData = [
    {
        label: 'American girl',
        content: <American></American>
    },
    {
        label: 'Barbie Doll',
        content: <Barbie></Barbie>
    },
    {
        label: 'Action Figure',
        content: <Action></Action>
    }
]

export default tabsData;