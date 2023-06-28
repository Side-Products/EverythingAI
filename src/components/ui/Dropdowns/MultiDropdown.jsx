import Select from "react-select";
import makeAnimated from "react-select/animated";

const stylesDropdown = {
	placeholder: (defaultStyles) => {
		return {
			...defaultStyles,
			color: "#8553FB",
			fontWeight: "500",
		};
	},
	//Seleted value styling
	multiValue: (style) => {
		return {
			...style,
			borderRadius: "18px",
			backgroundColor: "transparent",
			color: "#8553FB",
			border: "1px solid #8553FB",
			padding: "1px 5px",
			marginBottom: "3px",
			width: "fit-content",
		};
	},
	//Selected Value remove button styling
	multiValueRemove: (base) => ({
		...base,
		"&:hover": {
			backgroundColor: "rgba(255,255,255,0)",
		},
	}),
	//Selected Value text styling
	multiValueLabel: (base) => ({
		...base,
		color: "374151",
		fontWeight: "500",
		maxWidth: "60px",
	}),
	// Menu options styling
	option: (base) => ({
		...base,
		fontFamily: "Inter",
		cursor: "pointer !important",
		fontSize: "0.9rem",
		fontWeight: "400",
		backgroundColor: "transparent",
		padding: "6px 15px",
		"&:hover": {
			backgroundColor: "#F6F6F7",
		},
		zIndex: 10,
	}),
	// Main Dropdown Styling
	control: (base, state) => ({
		...base,
		fontFamily: "Inter",
		fontSize: "0.9rem",
		fontWeight: "500",
		background: "transparent",
		cursor: "pointer !important",
		borderWidth: 0,
		width: "max-content",
		outline: "none",
		zIndex: 10,
		boxShadow: state.isFocused ? null : null,
	}),
	//Dropdown Indicators
	dropdownIndicator: (base) => ({
		...base,
		color: "#8553FB",
		"&:hover": {
			color: "#8553FB",
			cursor: "pointer !important",
		},
	}),
	clearIndicator: (base) => ({
		...base,
		color: "#8553FB",
		"&:hover": {
			color: "#8553FB",
			cursor: "pointer !important",
		},
	}),
	//Dropdown menu
	menu: (base) => ({
		...base,
		marginTop: 7,
		fontFamily: "Poppins",
		zIndex: 10,
		// bg-white rounded-md
		backgroundColor: "#fff",
		borderRadius: "6px !important",
		"&:hover": {
			borderRadius: "6px",
			cursor: "pointer !important",
		},
	}),
	menuList: (base) => ({
		...base,
		fontSize: "0.95rem",
		zIndex: 10,
		color: "#374151",
		borderRadius: "6px !important",
		"&:hover": {
			color: "#111827",
			cursor: "pointer !important",
		},
	}),
};

export default function MultiDropdown({ options, selectedValue, setSelectedValue, placeholder, type }) {
	const animatedComponents = makeAnimated();

	const handleValueSelection = (item) => {
		setSelectedValue({ type, selectedSubcategories: item });
	};

	return (
		<Select
			maxMenuHeight={200}
			placeholder={placeholder}
			className="w-full"
			components={animatedComponents}
			isMulti={true}
			isOptionDisabled={() => {
				return selectedValue.length > 2;
			}}
			isSearchable={false}
			styles={stylesDropdown}
			closeMenuOnSelect={false}
			options={options}
			defaultValue={selectedValue}
			onChange={handleValueSelection}
		/>
	);
}
