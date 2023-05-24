import { FC, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoadingScreen from "./loadingscreen/loadingscreen";
import { appRoutes } from "./constants/routes";
import ErrorScreen from "./errorscreen/errorscreen";

const TestModule = lazy(() => import("./testmodule/testmodule"));

const AnotherTestModule = lazy(
  () => import("./anothertestmodule/anothertestmodule")
);

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: appRoutes.testmodule,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <TestModule />
          </Suspense>
        ),
      },
      {
        path: appRoutes.anothertestmodule,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AnotherTestModule />
          </Suspense>
        ),
      },
    ],
  },
]);

const Routing: FC = () => <RouterProvider router={router} />;

export default Routing;
