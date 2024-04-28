import { Button, Color, Text, Margin, Select } from '@lecture_79/react/lib';
import './App.css'

const colorOptions = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
  {label: 'Yellow', value: 'yellow'},
  {label: 'Purple', value: 'purple'},
  {label: 'Orange', value: 'orange'},
];

const App = () => {
  return (
    <div>
      {/* <h1>Hello MonoRepo</h1>
      <Margin space='xxl'>
        <Text size='xxl'> Hello World </Text>
      </Margin>
      <Color hexCode='#212121' width='xxxl' height='xxxl'/>
      <Button title='Hey this is your button' onClick={()=> alert('Hello world')}>Click Me</Button> */}
      <Margin>
        <Text>This is a Select Component</Text>
        <Select 
          label='Select a Color' 
          options={colorOptions} 
          onOptionSelected={console.log}
          // renderOption={({
          //     option, 
          //     isSelected, 
          //     getOptionRecommendedProps
          //   }) => 
          //   (<li {...getOptionRecommendedProps({className: `custom-select-option ${isSelected ? 'custom-select-option--selected' : ''}`})}>
          //     <div style={{display: 'flex'}}>
          //       <input type="checkbox" checked={isSelected}/>
          //       <Text>{option.label}</Text>
          //     </div>
          //   </li>
          // )}
        />
      </Margin>
      <Margin>
        <Text>End of OPtiONs</Text>
      </Margin>
    </div>
  );
}

export default App;