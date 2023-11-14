export default ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-3/4 lg:h-3/4 w-full lg:h-full p-2 flex flex-col justify-center">{children}</div>
    </div>
  );
};
