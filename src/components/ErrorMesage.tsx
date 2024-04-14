interface ErrorMesageProps {
  error: string;
}

const ErrorMesage = ({ error }: ErrorMesageProps) => {
  return <p className=" text-center text-red-600">{error}</p>;
};
export default ErrorMesage;
