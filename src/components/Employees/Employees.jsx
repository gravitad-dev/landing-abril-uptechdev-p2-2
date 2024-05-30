import Info from "./Info";
import Text from "./Text";

const Employees = () => {
  return (
    <div
      className='
    flex flex-col gap-5 md:flex-row justify-between items-baseline
    '
      id='employees'
    >
      <div className='flex-1  max-w-[600px]'>
        <Info />
      </div>
      <div className='flex-1 max-w-[600px]'>
        <Text />
      </div>
    </div>
  );
};
export default Employees;
