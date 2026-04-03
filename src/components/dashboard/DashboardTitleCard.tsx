import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleTitleBar from "@/components/dashboard/SimpleTitleBar";

interface DashboardTitleCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  /** Por padrão volta para /dashboard (como solicitado) */
  backTo?: string;
  right?: React.ReactNode;
}

const DashboardTitleCard = ({
  title,
  subtitle,
  icon,
  backTo = "/dashboard",
  right,
}: DashboardTitleCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="-mb-2 md:-mb-2">
      <SimpleTitleBar
        title={title}
        subtitle={subtitle}
        icon={icon}
        right={right}
        onBack={() => navigate(backTo)}
        useModuleMetadata={false}
      />
    </div>
  );
};

export default DashboardTitleCard;
