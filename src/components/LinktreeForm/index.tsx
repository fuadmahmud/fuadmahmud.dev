import { ReactNode, useState } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormSetValue,
  FieldName,
} from "react-hook-form";
import {
  Input,
  Textarea,
  Avatar,
  FileButton,
  Switch,
  Button,
  UnstyledButton,
  Slider,
  Modal,
} from "@mantine/core";
import { MdAlternateEmail } from "react-icons/md";
import DefaultAvatar from "../../assets/default.jpg";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineDragIndicator, MdDelete } from "react-icons/md";
import { ChromePicker, ColorResult } from "react-color";
import { classNames } from "../../utils";
import { SubTitle, Title } from "../Typography";

type Color = { hex: string; a: string | number };

export type FormInput = {
  username: string;
  bio: string;
  links: Array<{ label: string; link: string; active: false }>;
  background: {
    type: "flat" | "gradient" | "image";
    image?: string;
    color?: Color;
    colors?: { from: string; to: string };
  };
  avatar: {
    image: string | null;
    radius: "circle" | "square";
  };
  buttonStyle: {
    color: Color;
    fontColor: Color;
    radius: number;
    shadow: string;
    shadowColor: string;
  };
};

type ButtonFilledProps = {
  className?: string;
  children?: ReactNode | ReactNode[];
  onClick: () => void;
};

type ColorPickerProps = {
  fieldName?:
    | "background.color"
    | "buttonStyle.color"
    | "buttonStyle.fontColor";
  onClose: () => void;
  onClick: UseFormSetValue<FormInput>;
};

const RADIUS_MARKS = [
  { value: 0, label: "none" },
  { value: 25, label: "sm" },
  { value: 50, label: "md" },
  { value: 75, label: "lg" },
  { value: 100, label: "full" },
];

const BUTTON_RADIUS: Record<number, string> = {
  0: "-none",
  25: "",
  50: "-md",
  75: "-lg",
  100: "-full",
};

const Wrapper = ({ children }: { children?: ReactNode | ReactNode[] }) => {
  return (
    <div className="shadow-md p-4 mb-4 rounded-md bg-white dark:bg-[#2A2D32] dark:shadow-none dark:">
      {children}
    </div>
  );
};

const ButtonFilled = ({ children, onClick, className }: ButtonFilledProps) => {
  return (
    <Button
      className={classNames(
        className,
        "bg-[#2B90A0] text-white rounded-full w-full mt-6"
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const ColorPicker = ({ fieldName, onClose, onClick }: ColorPickerProps) => {
  const [color, selectColor] = useState<ColorResult["hex"]>("FFFFFF");
  const [transparency, setTransparency] = useState(1);

  const handleSelectColor = (value: ColorResult) => {
    selectColor(value.hex);
    setTransparency(value.rgb.a || 1);
  };

  const handlePickColor = () => {
    if (fieldName) {
      onClick(fieldName, { hex: color, a: transparency });
    }
    onClose();
  };

  return (
    <Modal opened={!!fieldName} onClose={onClose}>
      <div className="flex flex-col items-center">
        <SubTitle className="mb-4 text-left break-word hyphens-auto">
          You can change color and transparency too
        </SubTitle>

        <ChromePicker color={color} onChange={handleSelectColor} />
        <ButtonFilled onClick={handlePickColor}>Choose it</ButtonFilled>
      </div>
    </Modal>
  );
};

const LinktreeFrom = () => {
  const { handleSubmit, register, setValue, watch } = useForm<FormInput>({
    defaultValues: { links: [{ label: "", link: "", active: false }] },
  });
  const [activeField, setActiveField] =
    useState<ColorPickerProps["fieldName"]>();
  const links = watch("links");
  const radius = watch("avatar.radius");
  const avatar = watch("avatar.image");
  const buttonStyle = watch("buttonStyle");

  const onSubmit: SubmitHandler<FormInput> = (values) => console.log(values);

  const handleAvatar = (payload: File | null) => {
    const reader = new FileReader();
    if (payload) {
      reader.readAsDataURL(payload);
      reader.onload = function () {
        setValue("avatar.image", reader.result as string);
      };
    }
  };

  const handleAddLink = () => {
    setValue("links", [...links, { label: "", link: "", active: false }]);
  };

  const handleRemoveLink = (index: number) => {
    setValue(
      "links",
      links.filter((_, idx) => idx !== index)
    );
  };

  return (
    <form>
      <Wrapper>
        <Title>Profile</Title>
        <Input.Wrapper withAsterisk label="Create your username">
          <Input
            icon={<MdAlternateEmail />}
            placeholder="Enter your username"
            {...register("username", { pattern: /^\w+$/ })}
          />
        </Input.Wrapper>
        <Textarea
          className="mt-4"
          placeholder="Enter your bio"
          maxLength={80}
          {...register("bio")}
        />
      </Wrapper>
      <Wrapper>
        <Title>Upload your avatar</Title>
        <div className="flex flex-row gap-4">
          <Avatar
            alt="Your avatar"
            src={avatar || DefaultAvatar}
            size="xl"
            radius={radius === "circle" ? "50%" : "md"}
          />
          <div>
            <FileButton onChange={handleAvatar} accept="image/png,image/jpeg">
              {(props) => (
                <ButtonFilled {...props}>Upload your avatar</ButtonFilled>
              )}
            </FileButton>
            <Button
              className="text-black dark:text-white rounded-full border border-gray-300 w-full mt-2"
              type="button"
              onClick={() => setValue("avatar.image", null)}
            >
              Remove it
            </Button>
          </div>
        </div>
        <Switch
          className="mt-4"
          label="Change to square"
          onChange={(e) =>
            setValue("avatar.radius", e.target.checked ? "square" : "circle")
          }
        />
      </Wrapper>
      <Wrapper>
        <Title>Background</Title>
        <div className="flex flex-row gap-2">
          <UnstyledButton className="flex items-center justify-center bg-[#2B90A0] h-40 w-1/3 rounded text-white">
            Flat Color
          </UnstyledButton>
          <UnstyledButton className="flex items-center justify-center bg-gradient-to-t from-[#2B90A0] to-blue-500 h-40 w-1/3 rounded text-white">
            Gradient
          </UnstyledButton>
          <FileButton onChange={handleAvatar} accept="image/png,image/jpeg">
            {(props) => (
              <UnstyledButton
                {...props}
                className="flex flex-col items-center justify-center bg-white border border-dashed border-gray-500 h-40 w-1/3 rounded"
              >
                <BiImageAdd size={32} />
                Image
              </UnstyledButton>
            )}
          </FileButton>
        </div>
      </Wrapper>
      <Wrapper>
        <Title>Add your links</Title>
        {links.map((_, index) => {
          return (
            <div
              className="flex flex-row items-center justify-between mt-4"
              key={index}
            >
              <MdOutlineDragIndicator />
              <div className="w-2/3">
                <Input
                  placeholder="Enter your label"
                  {...register(`links.${index}.label`)}
                />
                <Input
                  className="mt-2"
                  placeholder="Enter your link"
                  {...register(`links.${index}.link`)}
                />
              </div>
              <div className="h-full flex flex-col gap-4 items-center">
                <Switch />
                {index > 0 && (
                  <MdDelete onClick={() => handleRemoveLink(index)} />
                )}
              </div>
            </div>
          );
        })}
        <ButtonFilled onClick={handleAddLink}>Add more</ButtonFilled>
      </Wrapper>
      <Wrapper>
        <Title>Button</Title>
        <UnstyledButton
          className={classNames(
            "w-full px-auto py-2 items-center flex justify-center mb-4",
            `rounded${
              buttonStyle?.radius ? BUTTON_RADIUS[buttonStyle.radius] : "-none"
            }`
          )}
          style={{
            backgroundColor: buttonStyle?.color?.hex || "#2B90A0",
            color: buttonStyle?.fontColor?.hex || "white",
          }}
          type="button"
        >
          Your preview button
        </UnstyledButton>
        <section className="mb-2">
          <SubTitle>Radius</SubTitle>
          <Slider
            className="mb-6 w-4/5 mx-auto"
            defaultValue={0}
            step={25}
            label={null}
            marks={RADIUS_MARKS}
            onChangeEnd={(value) => setValue("buttonStyle.radius", value)}
          />
        </section>
        <SubTitle>Outline</SubTitle>
        <section>
          <SubTitle>Color</SubTitle>
          <ButtonFilled
            className="mt-0 mb-2"
            onClick={() => setActiveField("buttonStyle.color")}
          >
            Pick your color
          </ButtonFilled>
        </section>
        <section>
          <SubTitle>Font color</SubTitle>
          <ButtonFilled
            className="mt-0 mb-2"
            onClick={() => setActiveField("buttonStyle.fontColor")}
          >
            Pick your font color
          </ButtonFilled>
        </section>
        <SubTitle>Shadow</SubTitle>
        <SubTitle>Shadow color</SubTitle>
      </Wrapper>
      <Wrapper>
        <Title>Fonts</Title>
      </Wrapper>
      <ColorPicker
        onClose={() => setActiveField(undefined)}
        onClick={setValue}
        fieldName={activeField}
      />
      <Button
        className="bg-[#2B90A0] text-white rounded w-full mt-4"
        type="button"
      >
        Preview
      </Button>
    </form>
  );
};

export default LinktreeFrom;
