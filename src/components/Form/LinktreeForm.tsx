import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Input,
  Textarea,
  Avatar,
  FileButton,
  Switch,
  createStyles,
  Button,
  UnstyledButton,
} from "@mantine/core";
import { MdAlternateEmail } from "react-icons/md";
import DefaultAvatar from "../../assets/default.jpg";
import { BiImageAdd } from "react-icons/bi";

export type FormInput = {
  username: string;
  bio: string;
  links: Array<{ label: string; link: string }>;
  background: {
    type: "flat" | "gradient" | "image";
    image?: string;
    color?: string;
    colors?: { from: string; to: string };
  };
  avatar: {
    image: string | null;
    radius: "circle" | "square";
  };
  buttonStyle: {
    color: string;
    radius: number;
    shadow: string;
  };
};

const Wrapper = ({ children }: { children?: ReactNode | ReactNode[] }) => {
  return (
    <div className="shadow-md p-4 mb-4 rounded-md bg-white dark:bg-[#2A2D32] dark:shadow-none dark:">
      {children}
    </div>
  );
};

const Title = ({ children }: { children?: ReactNode }) => (
  <p className="font-semibold text-lg mb-2">{children}</p>
);

const useStyle = createStyles((theme) => ({
  label: {
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
}));

const LinktreeFrom = () => {
  const { handleSubmit, register, getValues, setValue, watch } =
    useForm<FormInput>({
      defaultValues: { links: [{ label: "", link: "" }] },
    });
  const links = getValues("links");
  const radius = watch("avatar.radius");
  const avatar = watch("avatar.image");
  const { classes } = useStyle();

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

  return (
    <form>
      <Wrapper>
        <Title>Profile</Title>
        <Input
          icon={<MdAlternateEmail />}
          placeholder="Enter your username"
          {...register("username")}
        />
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
                <Button
                  {...props}
                  className="bg-[#2B90A0] text-white rounded-full w-full"
                  type="button"
                >
                  Upload your avatar
                </Button>
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
          classNames={{
            label: classes.label,
          }}
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
            <div className="mt-4" key={index}>
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
          );
        })}
        <Button
          className="bg-[#2B90A0] text-white rounded-full w-full mt-4"
          type="button"
        >
          Add more
        </Button>
      </Wrapper>
      <Wrapper>
        <Title>Button</Title>
      </Wrapper>
      <Wrapper>
        <Title>Fonts</Title>
      </Wrapper>
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
