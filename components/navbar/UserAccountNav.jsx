'use client';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { SignOutButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function UserAccountNav({ user }) {
    const [imageError, setImageError] = useState(false);

    if (!user) return null;

    const { firstName, lastName, email, imageUrl } = user;
    const fallbackInitials =
        (firstName?.[0] || '') + (lastName?.[0] || '');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full border shadow p-0"
                >
                    <Avatar className="h-9 w-9 shadow ">
                        {!imageError && imageUrl ? (
                            <AvatarImage
                                src={imageUrl}
                                alt="User Avatar"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <AvatarFallback>{fallbackInitials}</AvatarFallback>
                        )}
                        <AvatarFallback>
                            {firstName?.[0]}
                            {lastName?.[0]}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-2">
                    <p className="text-sm font-medium">{firstName} {lastName}</p>
                    <p className="text-xs text-muted-foreground truncate">{email}</p>
                </div>

                <DropdownMenuSeparator />

                {/* <DropdownMenuItem asChild>
          <Link
            href="/dashboard"
            className="flex items-center justify-between w-full"
          >
            <span>Dashboard</span>
            <ArrowRight size={16} />
          </Link>
        </DropdownMenuItem> */}

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <SignOutButton>
                        <button className="flex items-center justify-between text-red-600 w-full">
                            <span>Log out</span>
                            <LogOut size={16} />
                        </button>
                    </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
