import Dropdown from "@/components/ui/Input/Dropdown";
import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";
import Button from "@/components/ui/Button";

const AiRecommender = () => {
  return (
    <form className="w-full flex justify-center">
      <div className="w-2/3 grid grid-cols-2 mt-10 py-16 px-32 bg-white rounded-2xl gap-8 items-end">
        <div>Hello! What are you here for?</div>
        <div>
          <Dropdown
            variant="secondary"
            id={"whatHere"}
            label={""}
            name="whatHere"
            options={[
              "Find AI tools",
              "Explore how I can use AI",
              "Want to list my AI tool here",
            ]}
            required={true}
          />
        </div>

        <div>I work for a</div>
        <div>
          <Dropdown
            variant="secondary"
            id={"workFor"}
            label={""}
            name="workFor"
            options={["Startup", "SMB", "Enterprise"]}
            required={true}
          />
        </div>

        <div>I am in</div>
        {/* TODO: dropdown of categories */}
        <div>
          <Dropdown
            variant="secondary"
            id={"department"}
            label={""}
            name="department"
            options={[
              "Marketing",
              "Sales",
              "Product",
              "Dev",
              "Data",
              "Design",
              "Human Resources",
              "Legal",
              "Ops",
              "Customer Success",
              "Other",
            ]}
            required={true}
          />
        </div>

        <div>I am looking for an AI Tool in</div>
        {/* TODO: dropdown of sub-categories */}
        <div>
          <Dropdown
            variant="secondary"
            id={"department"}
            label={""}
            name="department"
            options={[
              "Marketing",
              "Sales",
              "Product",
              "Dev",
              "Data",
              "Design",
              "Human Resources",
              "Legal",
              "Ops",
              "Customer Success",
              "Other",
            ]}
            required={true}
          />
        </div>

        <div className="flex h-full items-start text-start">
          That helps me with
        </div>
        <div>
          <Textarea
            variant="secondary"
            //   label={"Features"}
            //   value={toolData.features}
            name={"features"}
            //   onFieldChange={onToolDataChange}
            placeholder="write briefly what you want the tool to do"
            required={false}
            rows={"4"}
          />
        </div>

        <div>
          What&apos;s important to me?
          <br />
          (Pick any 3)
        </div>
        <div className="grid grid-cols-2 text-sm whitespace-nowrap">
          <label className="flex gap-2 cursor-pointer">
            <input type="checkbox" name="preferences" value="Security" />
            Security
          </label>

          <label className="flex gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="preferences"
              value="Ease of implementation"
            />
            Ease of implementation
          </label>

          <label className="flex gap-2 cursor-pointer">
            <input type="checkbox" name="preferences" value="Support" />
            Support
          </label>

          <label className="flex gap-2 cursor-pointer">
            <input type="checkbox" name="preferences" value="Affordability" />
            Affordability
          </label>

          <label className="flex gap-2 cursor-pointer">
            <input type="checkbox" name="preferences" value="Good Reviews" />
            Good reviews
          </label>

          <label className="flex gap-2 cursor-pointer">
            <input type="checkbox" name="preferences" value="Has Discounts" />
            Has Discounts
          </label>
        </div>

        <div>My company size is</div>
        <div>
          <Dropdown
            variant="secondary"
            id={"companySize"}
            label={""}
            name="companySize"
            options={[
              "1-10",
              "11-50",
              "51-200",
              "201-500",
              "501-1000",
              "1000+",
            ]}
            required={true}
          />
        </div>

        <div className="col-span-2">
          <div>
            <Button variant={"primary"} classes="text-md px-4 py-3 group mt-4">
              <span className="transition-all duration-500 group-hover:pr-6">
                Give me the Top 3 Tools
                <i className="absolute pl-2 mt-1 font-bold transition-all duration-500 opacity-0 fas fa-angle-double-right group-hover:opacity-100"></i>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AiRecommender;
