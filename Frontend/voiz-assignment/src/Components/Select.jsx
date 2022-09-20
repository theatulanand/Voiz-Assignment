import { MultiSelect } from "react-multi-select-component";

const Select = ({ options, setSelected, selected }) => {


    return (
        <div className="example" style={{ height: "180px", overflow: "hidden", overflowY: "scroll" }}>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
        </div>
    );
};

export default Select;