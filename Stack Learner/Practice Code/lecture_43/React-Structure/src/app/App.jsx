import InputGroups from "../components/shared/forms/InputGroups";
import Button from "../components/ui/buttons/Button";
import TextInput from "../components/ui/inputs/TextInput";
import Text from "../components/ui/texts/Text";

const App = () => {
    return(
        <div>
            <h1>App</h1>
            <div>
                <InputGroups name='title' placeholder='Enter the title' label='Title' error='Something went wrong'/>
            </div>
        </div>
    )
}

export default App;