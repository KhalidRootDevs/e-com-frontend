// Define the prop type
interface UseSimulatedErrorProps {
  message?: string;
}

// Convert the hook to TypeScript and accept a message prop
const useSimulatedError = ({ message = "Simulated error" }: UseSimulatedErrorProps) => {
  throw new Error(message);
};

export default useSimulatedError;
