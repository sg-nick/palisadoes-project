import React, { useEffect } from "react";
import { ExternalLink, Lock } from "lucide-react";
import { Button } from "../components/ui/button";

const ONLINE_BANKING_URL = "https://gia.msd-tt.com/palis/login.php";

const OnlineBanking = () => {
  useEffect(() => {
    const t = setTimeout(() => { window.location.href = ONLINE_BANKING_URL; }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-purple-50/30 to-teal-50/30 flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8A4D6F] to-[#0d9488] mb-5 animate-pulse">
          <Lock className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Redirecting to Online Banking</h1>
        <p className="mt-3 text-slate-600">You are being securely redirected to our online banking portal.</p>
        <a href={ONLINE_BANKING_URL} className="inline-block mt-6" data-testid="ob-manual-link">
          <Button className="bg-[#0d9488] hover:bg-[#0f766e] text-white">
            <ExternalLink className="w-4 h-4 mr-2" />
            Continue Now
          </Button>
        </a>
        <p className="mt-4 text-xs text-slate-500">If you are not redirected, click the button above.</p>
      </div>
    </div>
  );
};

export default OnlineBanking;
