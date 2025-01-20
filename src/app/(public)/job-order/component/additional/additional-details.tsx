import { ButtonGroup } from "../button/button-group";
import { AdditionalFields } from "./additional-field";

interface Props {
  orderType: string;
  setOrderType: React.Dispatch<React.SetStateAction<string>>;
  environment: string;
  setEnvironment: React.Dispatch<React.SetStateAction<string>>;
  setOrderData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      size: string;
      location: string;
    }>
  >;
  errors: { [key: string]: string };
}

export default function AdditionalDetails({
  orderType,
  setOrderType,
  environment,
  setEnvironment,
  setOrderData,
  errors,
}: Props) {
  const setType = (): void => {
    setOrderType((prev) =>
      prev === "Individual" ? "Corporate" : "Individual",
    );
  };

  const chooseEnvironment = (): void => {
    setEnvironment((prev) => (prev === "Interior" ? "Exterior" : "Interior"));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col space-y-6 rounded-2xl border border-muted-foreground bg-secondary p-6">
      <div className="flex items-center justify-between">
        <ButtonGroup
          label="Order Type"
          options={["Individual", "Corporate"]}
          selectedOption={orderType}
          onSelect={setType}
        />
        <ButtonGroup
          label="Choose Type"
          options={["Interior", "Exterior"]}
          selectedOption={environment}
          onSelect={chooseEnvironment}
        />
      </div>

      <section className="flex flex-col gap-4">
        <AdditionalFields
          handleInputChange={handleInputChange}
          errors={errors}
        />
      </section>
    </div>
  );
}
