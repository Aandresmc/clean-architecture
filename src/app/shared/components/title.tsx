import Typography from "@material-ui/core/Typography";

type Props = {
    title: string
};
export const TitleComponent: React.FC<Props> = ({ title }: Props) => <Typography component="h1" variant="h4">{title}</Typography>;