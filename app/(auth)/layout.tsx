const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
