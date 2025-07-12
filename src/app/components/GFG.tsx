"use client"
import { Card, CardHeader, CardBody, Divider, Image, Avatar, addToast, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface GFGStat {
    userHandle: string
    total_problems_solved: number
    total_score: number
    monthly_score: number
    Basic: number
    Easy: number
    Medium: number
    Hard: number
}

export default function GFG() {
    const [stat, setStat] = useState<GFGStat>({
        userHandle: "",
        total_problems_solved: 0,
        total_score: 0,
        monthly_score: 0,
        Basic: 0,
        Easy: 0,
        Medium: 0,
        Hard: 0,
    });
    const [loading, setLoading] = useState<boolean>(false)

    const fetchStats = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/api/gfg");
            console.log(response)
            if (response.data.success) {
                setStat(response.data.data)
            } else {
                addToast({
                    title: "Error",
                    description: "Failed to fetched geeksforgeeks profile",
                    color: "danger"
                })
            }
        } catch (error) {
            addToast({
                title: "Error",
                description: "Failed to fetched geeksforgeeks profile",
                color: "danger"
            })
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchStats()
    }, [])
    return (
        <Card className="max-w-[400px] text-foreground bg-background border border-success" isPressable onPress={() => window.open("https://www.geeksforgeeks.org/user/shahfaiz/", "_blank")}>
            <CardHeader className="flex gap-3 justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://avatars.githubusercontent.com/u/111171229?v=4"
                        color="success"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">S Faizaan Hussain</h4>
                        <h5 className="text-small tracking-tight text-default-400">@shahfaiz</h5>
                    </div>
                </div>
                <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                    width={40}
                />
            </CardHeader>
            <Divider className="bg-success"/>
            <CardBody className="font-mono p-0">
                {
                    loading ?
                    (
                        <Spinner variant="gradient" color="success" className="my-10"/>
                    )
                    :
                    (
                        <div>
                            <div className="flex items-center justify-evenly h-13 gap-x-5 text-center px-2">
                    <div>
                        <h4 className="text-[10px] md:text-xs text-gray-300 mt-1">Coding Score</h4>
                        <p className="text-sm md:text-base">{stat.total_score}</p>
                    </div>
                    <Divider orientation="vertical" className="bg-success" />
                    <div>
                        <h4 className="text-[10px] md:text-xs text-gray-300 mt-1">Problems Solved</h4>
                        <p className="text-sm md:text-base">{stat.total_problems_solved}</p>
                    </div>
                    <Divider orientation="vertical" className="bg-success" />
                    <div>
                        <h4 className="text-[10px] md:text-xs text-gray-300 mt-1">Monthly Score</h4>
                        <p className="text-sm md:text-base">{stat.monthly_score}</p>
                    </div>
                </div>
                <Divider className="bg-success"/>
                <Table removeWrapper hideHeader isCompact aria-label="Example static collection table" className="text-xs p-2">
                    <TableHeader>
                        <TableColumn>Type</TableColumn>
                        <TableColumn>Solved</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Basic</TableCell>
                            <TableCell>{stat.Basic}</TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>Easy</TableCell>
                            <TableCell>{stat.Easy}</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Medium</TableCell>
                            <TableCell>{stat.Medium}</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Hard</TableCell>
                            <TableCell>{stat.Hard}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                        </div>
                    )
                }
            </CardBody>
        </Card>
    )
}
