import React, { useMemo, useState } from "react";
import { Calculator, Banknote, Clock3, Percent, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

const currency = new Intl.NumberFormat("en-JM", {
  style: "currency",
  currency: "JMD",
  maximumFractionDigits: 0,
});

const clampNumber = (value, min, max) => {
  const next = Number(value);
  if (Number.isNaN(next)) return min;
  return Math.min(Math.max(next, min), max);
};

const Field = ({ icon: Icon, label, children }) => (
  <div>
    <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
      <Icon className="w-4 h-4 text-[#8A4D6F]" />
      {label}
    </Label>
    <div className="mt-2">{children}</div>
  </div>
);

const HomeLoanCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(3);

  const result = useMemo(() => {
    const months = Math.max(1, Math.round(years * 12));
    const monthlyRate = rate / 100 / 12;
    const payment =
      monthlyRate === 0
        ? amount / months
        : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const total = payment * months;

    return {
      months,
      payment,
      total,
      interest: Math.max(0, total - amount),
    };
  }, [amount, rate, years]);

  const reset = () => {
    setAmount(500000);
    setRate(12);
    setYears(3);
  };

  return (
    <section id="loan-calculator" className="bg-white py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              Loan Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Plan your monthly payment before you apply
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
              Adjust the loan amount, interest rate, and repayment term to see a quick monthly payment estimate.
            </p>
            <div className="mt-7 grid sm:grid-cols-3 gap-3 max-w-xl">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">Amount</div>
                <div className="mt-1 text-lg font-bold text-[#8A4D6F]">{currency.format(amount)}</div>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">Rate</div>
                <div className="mt-1 text-lg font-bold text-[#8A4D6F]">{rate.toFixed(1)}%</div>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">Term</div>
                <div className="mt-1 text-lg font-bold text-[#8A4D6F]">{result.months} months</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 shadow-xl overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#8A4D6F] to-[#0d9488]" />
            <div className="grid md:grid-cols-[1fr_0.85fr]">
              <div className="p-6 sm:p-8 space-y-7 bg-white">
                <Field icon={Banknote} label="Loan amount">
                  <Input
                    type="number"
                    min="50000"
                    max="10000000"
                    step="10000"
                    value={amount}
                    onChange={(e) => setAmount(clampNumber(e.target.value, 50000, 10000000))}
                    className="h-11 text-base"
                    data-testid="loan-calc-amount"
                  />
                  <Slider
                    value={[amount]}
                    min={50000}
                    max={10000000}
                    step={10000}
                    onValueChange={([value]) => setAmount(value)}
                    className="mt-4"
                  />
                </Field>

                <Field icon={Percent} label="Annual interest rate">
                  <Input
                    type="number"
                    min="0"
                    max="35"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(clampNumber(e.target.value, 0, 35))}
                    className="h-11 text-base"
                    data-testid="loan-calc-rate"
                  />
                  <Slider
                    value={[rate]}
                    min={0}
                    max={35}
                    step={0.1}
                    onValueChange={([value]) => setRate(value)}
                    className="mt-4"
                  />
                </Field>

                <Field icon={Clock3} label="Repayment term">
                  <Input
                    type="number"
                    min="0.5"
                    max="15"
                    step="0.5"
                    value={years}
                    onChange={(e) => setYears(clampNumber(e.target.value, 0.5, 15))}
                    className="h-11 text-base"
                    data-testid="loan-calc-years"
                  />
                  <Slider
                    value={[years]}
                    min={0.5}
                    max={15}
                    step={0.5}
                    onValueChange={([value]) => setYears(value)}
                    className="mt-4"
                  />
                </Field>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#8A4D6F] to-[#0d9488] text-white flex flex-col justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/75">Estimated monthly payment</div>
                  <div className="mt-3 text-4xl font-extrabold tracking-tight" data-testid="loan-calc-payment">
                    {currency.format(result.payment)}
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/20 pb-3">
                    <span className="text-white/75">Total repayment</span>
                    <strong>{currency.format(result.total)}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/20 pb-3">
                    <span className="text-white/75">Total interest</span>
                    <strong>{currency.format(result.interest)}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/75">Term length</span>
                    <strong>{result.months} months</strong>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a href="/download-forms">
                    <Button className="w-full bg-white text-[#8A4D6F] hover:bg-purple-50">Get Loan Forms</Button>
                  </a>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={reset}
                    className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanCalculator;
