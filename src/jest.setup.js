jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
    MemoryRouter: ({ children }) => <div>{children}</div>,
}));
