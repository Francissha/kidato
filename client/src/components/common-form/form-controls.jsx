import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function FormControls({ formControls = [], formData = {}, setFormData }) {
  function renderComponentByType(getControlItem) {
    let element = null;
    const currentControlItemValue= formData[getControlItem.name] || ''

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            className="border p-2 w-full rounded-md"
            value={currentControlItemValue}
            onChange={(e) => setFormData({ ...formData, [getControlItem.name]: e.target.value })}
          />
        );
        break;

      case "select":
        element = (
          <Select onValueChange={(currentControlItemValue) => setFormData({ ...formData, [getControlItem.name]: value })}>
            value={value}
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            className="border p-2 w-full rounded-md"
            value={currentControlItemValue}
            onChange={(e) => setFormData({ ...formData, [getControlItem.name]: e.target.value })}
          />
        );
        break;

      default:
        element = (
          <input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            className="border p-2 w-full rounded-md"
            value={currentControlItemValue}
            onChange={(e) => setFormData({ ...formData, [getControlItem.name]: e.target.value })}
          />
        );
        break;
    }
    return element;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controlItem) => (
        <div key={controlItem.name}>
          <label htmlFor={controlItem.name} className="block font-medium mb-1">
            {controlItem.label}
          </label>
          {renderComponentByType(controlItem)} {/* Renders input fields correctly */}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
