"use client"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, addToast, CircularProgress, Spinner } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface LeetcodeStat {
  status: string;
  message: string;
  totalSolved?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  totalQuestions?: number;
  totalEasy?: number;
  totalMedium?: number;
  totalHard?: number;
  acceptanceRate?: number;
}

export default function Leetcode() {
  const [stat, setStat] = useState<LeetcodeStat>({
    status: "",
    message: "",
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    totalQuestions: 100,
    totalEasy: 100,
    totalMedium: 100,
    totalHard: 100,
    acceptanceRate: 100,
  });
  const [loading, setLoading] = useState<boolean>(false)
  const fetchStats = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://leetcode-stats-api.herokuapp.com/shahfaiz");
      if (response.data.status === "success") {
        setStat(response.data);
      } else {
        addToast({
          title: "Error",
          description: "Failed to fetched leetcode profile",
          color: "danger"
        })
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to fetched leetcode profile",
        color: "danger"
      })
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchStats()
  }, [])
  return (
    <Card className="max-w-[400px] text-foreground bg-background border border-warning" isPressable onPress={() => window.open("https://leetcode.com/u/shahfaiz", "_blank")}>
      <CardHeader className="flex gap-3 justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://avatars.githubusercontent.com/u/111171229?v=4"
            color="warning"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-white">S Faizaan Hussain</h4>
            <h5 className="text-small tracking-tight text-default-400">@shahfaiz</h5>
          </div>
        </div>
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
          width={40}
        />
      </CardHeader>
      <Divider className="bg-warning"/>
      <CardBody>
        {
          loading
            ?
            (<Spinner variant="gradient" color="warning" className="my-10"/>)
            :
            (
              <div className="flex flex-row font-mono">
                <CircularProgress
                  color="primary"
                  formatOptions={{ style: "percent" }}
                  showValueLabel={true}
                  // size="lg"
                  classNames={{
                    svg: "h-36 w-36"
                  }}
                  value={stat.totalSolved}
                  valueLabel={<div>
                    <h3 className="text-white text-lg font-semibold">{stat.totalSolved}<span className="text-xs">/{stat.totalQuestions}</span></h3>
                    <div className="flex gap-x-1 items-center justify-center"><FaCheck className="text-success" /> Solved</div>
                  </div>}
                  maxValue={stat.totalQuestions}
                />
                <div className="flex justify-between">
                  <CircularProgress
                    color="success"
                    // formatOptions={{ style: "unit" }}
                    label={<span className="text-[10px] text-gray-300">{stat.easySolved}/{stat.totalEasy}</span>}
                    showValueLabel={true}
                    // size="lg"
                    classNames={{
                      svg: "h-18 w-18"
                    }}
                    value={stat.easySolved}
                    valueLabel={<span className="text-success text-xs font-semibold">Easy</span>}
                    maxValue={stat.totalEasy}
                  />
                  <CircularProgress
                    color="warning"
                    formatOptions={{ style: "percent" }}
                    label={<span className="text-[10px] text-gray-300">{stat.mediumSolved}/{stat.totalMedium}</span>}
                    showValueLabel={true}
                    // size="lg"
                    classNames={{
                      svg: "h-18 w-18"
                    }}
                    value={stat.mediumSolved}
                    valueLabel={<span className="text-warning text-xs font-semibold">Medium</span>}
                    maxValue={stat.totalMedium}
                  />
                  <CircularProgress
                    color="danger"
                    // formatOptions={{ style: "percent" }}
                    label={<span className="text-[10px] text-gray-300">{stat.hardSolved}/{stat.totalHard}</span>}
                    showValueLabel={true}
                    // size="lg"
                    classNames={{
                      svg: "h-18 w-18"
                    }}
                    value={stat.hardSolved}
                    valueLabel={<span className="text-danger text-xs font-semibold">Hard</span>}
                    maxValue={stat.totalHard}
                  />
                </div>
              </div>
            )
        }
      </CardBody>
      {/* <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://leetcode.com/u/shahfaiz">
              Visit profile.
            </Link>
          </CardFooter> */}
    </Card>
  );
}
