import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { api } from "../../lib/api";
import { assetUrl } from "../../lib/assets";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  if (localStorage.getItem("pali_admin_token")) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/admin/login", { email, password });
      localStorage.setItem("pali_admin_token", data.token);
      localStorage.setItem("pali_admin_email", data.email);
      toast({ title: "Welcome back", description: "Signed in successfully." });
      navigate("/admin/dashboard");
    } catch (err) {
      toast({ title: "Login failed", description: "Invalid email or password.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #8A4D6F 0%, transparent 40%), radial-gradient(circle at 80% 70%, #0d9488 0%, transparent 40%)" }} />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white mb-3 overflow-hidden">
            <img src={assetUrl("/Palisadoes_logo_shotcut.png")} alt="Palisadoes logo" className="w-14 h-14 object-contain" />
          </div>
          <h1 className="text-2xl font-bold">Palisadoes Admin</h1>
          <p className="text-sm text-slate-400 mt-1">Secure staff portal</p>
        </div>
        <Card className="border-0 bg-slate-900/80 backdrop-blur shadow-2xl">
          <CardContent className="p-7">
            <form onSubmit={submit} className="space-y-4" data-testid="admin-login-form">
              <div>
                <Label className="text-slate-300">Email</Label>
                <div className="relative mt-1.5">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <Input
                    data-testid="admin-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@palisadoes.coop"
                    className="pl-9 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>
              <div>
                <Label className="text-slate-300">Password</Label>
                <div className="relative mt-1.5">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <Input
                    data-testid="admin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-9 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>
              <Button
                type="submit"
                data-testid="admin-login-submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#8A4D6F] to-[#0d9488] hover:opacity-90 text-white"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-5 text-xs text-slate-500 text-center">
              Authorized staff only. All actions are logged.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
