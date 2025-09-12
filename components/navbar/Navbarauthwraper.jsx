import { AppNavbar } from "./LandingNavbar";
import { checkUser } from "@/lib/checkUser";

export default async function Navbarauthwraper() {
    const user = await checkUser();
    const isAdmin = user?.role === "ADMIN";

    return (
        <>
                <AppNavbar
                    isAdmin={isAdmin}
                    user={
                        user
                            ? {
                                id: user.id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                imageUrl: user.imageUrl,
                            }
                            : null
                    }
                /> 
        </>
    );
}
