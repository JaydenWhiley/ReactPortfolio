export default ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 h-3/4">{children}</div>
    </div>
  );
};
