
import { useState } from "react";

const recentQuizzes = [
  { title: "JavaScript Fundamentals", category: "JavaScript", score: 85, date: "Oct 8, 2026" },
  { title: "HTML & CSS Basics", category: "Web Development", score: 92, date: "Oct 6, 2026" },
  { title: "Python Essentials", category: "Python", score: 60, date: "Oct 4, 2026" },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Alex Johnson",
    username: "alex_dev",
    email: "alex@example.com",
    bio: "Learning, practicing, and improving my coding skills one quiz at a time.",
  });

  const updateUser = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const totalQuizzes = recentQuizzes.length;
  const averageScore = Math.round(
    recentQuizzes.reduce((sum, quiz) => sum + quiz.score, 0) / totalQuizzes
  );

  return (
    <main className="min-h-screen bg-slate-950 p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">

        {/* Page heading */}
        <div>
          <p className="text-sm text-indigo-400">ACCOUNT / PROFILE</p>
          <h1 className="mt-2 text-3xl font-bold">My Profile</h1>
          <p className="mt-2 text-slate-400">
            Manage your account and track your learning progress.
          </p>
        </div>

        {/* Profile banner */}
        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="h-36 bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 sm:h-48" />

          <div className="flex flex-col gap-5 px-5 pb-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div className="-mt-12 flex flex-col items-start gap-4 sm:-mt-14 sm:flex-row sm:items-end">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-slate-900 bg-indigo-500 text-3xl font-bold shadow-xl">
                {user.name.trim().charAt(0).toUpperCase() || "U"}
              </div>

              <div>
                {editing ? (
                  <input
                    value={user.name}
                    onChange={(e) => updateUser("name", e.target.value)}
                    aria-label="Full name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xl font-bold"
                  />
                ) : (
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                )}

                <p className="mt-1 text-sm text-slate-400">
                  @{user.username}
                </p>

                <span className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  ● Active learner
                </span>
              </div>
            </div>

            <button
              onClick={() => setEditing(!editing)}
              className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-500"
            >
              {editing ? "Save changes" : "✎ Edit profile"}
            </button>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Quizzes completed", value: totalQuizzes, icon: "📝", color: "text-indigo-400" },
            { label: "Average score", value: `${averageScore}%`, icon: "📈", color: "text-emerald-400" },
            { label: "Best score", value: `${Math.max(...recentQuizzes.map(q => q.score))}%`, icon: "🏆", color: "text-amber-400" },
            { label: "Achievements", value: "3", icon: "🎖️", color: "text-pink-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-indigo-500/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{stat.label}</span>
                <span className="text-xl">{stat.icon}</span>
              </div>
              <p className={`mt-4 text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Personal information */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-bold">Personal information</h3>
            <p className="mt-1 text-sm text-slate-400">
              Your account details
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm text-slate-400">Full name</label>
                <p className="mt-2 font-medium">{user.name}</p>
              </div>

              <div>
                <label className="text-sm text-slate-400">Username</label>
                <p className="mt-2 font-medium">@{user.username}</p>
              </div>

              <div>
                <label className="text-sm text-slate-400">Email address</label>
                {editing ? (
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => updateUser("email", e.target.value)}
                    aria-label="Email address"
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2"
                  />
                ) : (
                  <p className="mt-2 break-all font-medium">{user.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-400">About me</label>
                {editing ? (
                  <textarea
                    value={user.bio}
                    onChange={(e) => updateUser("bio", e.target.value)}
                    aria-label="About me"
                    className="mt-2 min-h-24 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm"
                  />
                ) : (
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {user.bio}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Quiz history */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Learning activity</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Your recent quiz results
                </p>
              </div>

              <div className="flex gap-1 rounded-xl bg-slate-800 p-1">
                {["Overview", "Achievements"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      activeTab === tab
                        ? "bg-indigo-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "Overview" ? (
              <div className="mt-6 space-y-4">
                {recentQuizzes.map((quiz) => (
                  <article
                    key={quiz.title}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-semibold">{quiz.title}</h4>
                        <p className="mt-1 text-xs text-slate-400">
                          {quiz.category} · {quiz.date}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className={`h-full rounded-full ${
                              quiz.score >= 80
                                ? "bg-emerald-400"
                                : quiz.score >= 60
                                ? "bg-amber-400"
                                : "bg-rose-400"
                            }`}
                            style={{ width: `${quiz.score}%` }}
                          />
                        </div>
                        <span className="w-12 text-right font-bold">
                          {quiz.score}%
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "🚀", title: "First Steps", description: "Start your learning journey." },
                  { icon: "🧠", title: "Knowledge Seeker", description: "Explore different quiz topics." },
                  { icon: "⭐", title: "High Achiever", description: "Score at least 90% on a quiz." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="mt-3 font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <p className="pb-4 text-center text-xs text-slate-500">
          Keep learning. Keep improving. 🎯
        </p>
      </div>
    </main>
  );
}
