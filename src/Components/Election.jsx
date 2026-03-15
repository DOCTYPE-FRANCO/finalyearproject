import React, { useState } from "react";
import { Church, PlusCircle, School, School2, X, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────

const TEMPLATES = [
  { id: "create",  icon: PlusCircle, label: "Create Election",         sub: "Start from scratch" },
  { id: "facussa", icon: School,     label: "FACUSSA Elections",        sub: "Faculty template" },
  { id: "acc",     icon: School2,    label: "AUASA Elections",          sub: "Association template" },
  { id: "altar",   icon: Church,     label: "Altar Servers Elections",  sub: "Church template" },
];

const ACC_POSITIONS = [
  "President", "Vice-President", "General Secretary",
  "Asst. General Secretary", "Provost", "Public Relations Officer",
  "Treasurer", "Financial Secretary", "Welfare (Male)", "Welfare (Female)",
].map((name) => ({ positionName: name, candidates: [""] }));

const emptyPosition = () => ({ positionName: "", candidates: [""] });

// ── Helpers ───────────────────────────────────────────────────────────────────

function updatePositions(list, setter, posIndex, updater) {
  const copy = list.map((p, i) => (i === posIndex ? updater(p) : p));
  setter(copy);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function TemplateCard({ icon: Icon, label, sub, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(37,99,235,0.15)" }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex flex-col gap-3 justify-center items-center w-[280px] h-[140px]
                 bg-white border border-gray-100 rounded-2xl shadow-md
                 hover:border-blue-200 transition-colors duration-200 cursor-pointer px-4"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
        <Icon color="#2563EB" size={24} />
      </div>
      <div className="text-center">
        <p className="font-bold text-gray-900 text-sm">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
    </motion.button>
  );
}

function CandidateInput({ value, onChange, onRemove, showRemove }) {
  return (
    <div className="flex items-center gap-2 group">
      <input
        type="text"
        placeholder="Candidate name"
        value={value}
        onChange={onChange}
        className="flex-1 h-9 px-3 text-sm bg-white border border-gray-200
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-transparent transition-all placeholder-gray-400"
      />
      {showRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="text-gray-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={14} />
        </button>
      )}
    </div>
  );
}

function PositionBlock({ pos, posIndex, positions, setPositions, removable }) {
  function handlePositionName(e) {
    updatePositions(positions, setPositions, posIndex, (p) => ({
      ...p,
      positionName: e.target.value,
    }));
  }

  function handleCandidate(e, candIndex) {
    updatePositions(positions, setPositions, posIndex, (p) => {
      const cands = [...p.candidates];
      cands[candIndex] = e.target.value;
      return { ...p, candidates: cands };
    });
  }

  function addCandidate() {
    updatePositions(positions, setPositions, posIndex, (p) => ({
      ...p,
      candidates: [...p.candidates, ""],
    }));
  }

  function removeCandidate(candIndex) {
    updatePositions(positions, setPositions, posIndex, (p) => ({
      ...p,
      candidates: p.candidates.filter((_, i) => i !== candIndex),
    }));
  }

  function removePosition() {
    setPositions(positions.filter((_, i) => i !== posIndex));
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-4
                    hover:border-blue-100 hover:shadow-sm transition-all duration-200">
      {/* Position header */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center
                        text-white text-xs font-bold shrink-0">
          {posIndex + 1}
        </div>
        <input
          type="text"
          placeholder="Position name (e.g. President)"
          value={pos.positionName}
          onChange={handlePositionName}
          className="flex-1 h-9 px-3 text-sm font-semibold bg-gray-50 border border-gray-200
                     rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-transparent transition-all placeholder-gray-400"
        />
        {removable && (
          <button
            type="button"
            onClick={removePosition}
            className="text-gray-300 hover:text-red-400 transition-colors"
          >
            <Trash2 size={15} />
          </button>
        )}
      </div>

      {/* Candidates */}
      <div className="flex flex-col gap-2 pl-10">
        {pos.candidates.map((cand, candIndex) => (
          <CandidateInput
            key={candIndex}
            value={cand}
            onChange={(e) => handleCandidate(e, candIndex)}
            onRemove={() => removeCandidate(candIndex)}
            showRemove={pos.candidates.length > 1}
          />
        ))}
        <button
          type="button"
          onClick={addCandidate}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-500
                     hover:text-blue-700 transition-colors w-fit mt-1"
        >
          <Plus size={13} /> Add Candidate
        </button>
      </div>
    </div>
  );
}

function ElectionModal({ title, positions, setPositions, onClose, electionTitle, setElectionTitle, showTitleField }) {
  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm pt-10 pb-10 px-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-gray-50 rounded-2xl w-full max-w-3xl shadow-2xl shadow-gray-300 overflow-hidden"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-7 py-5 bg-white border-b border-gray-100">
          <div>
            <p className="text-lg font-bold text-gray-900">{title}</p>
            <p className="text-xs text-gray-400 mt-0.5">Fill in positions and candidates below</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center
                       hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal body */}
        <div className="px-7 py-6 flex flex-col gap-5">

          {/* Election title field */}
          {showTitleField && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Election Title
              </label>
              <input
                type="text"
                placeholder="e.g. Student Union Elections 2025"
                value={electionTitle}
                onChange={(e) => setElectionTitle(e.target.value)}
                className="h-10 px-4 text-sm bg-white border border-gray-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-transparent transition-all placeholder-gray-400 max-w-md"
              />
            </div>
          )}

          {/* Positions */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Positions & Candidates
            </label>
            {positions.map((pos, posIndex) => (
              <PositionBlock
                key={posIndex}
                pos={pos}
                posIndex={posIndex}
                positions={positions}
                setPositions={setPositions}
                removable={positions.length > 1}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPositions([...positions, emptyPosition()])}
            className="flex items-center gap-2 text-sm font-semibold text-green-600
                       hover:text-green-700 transition-colors w-fit"
          >
            <Plus size={15} /> Add Position
          </button>
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-end gap-3 px-7 py-5 bg-white border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 h-9 text-sm font-semibold text-gray-500 hover:text-gray-800
                       rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 h-9 bg-blue-600 hover:bg-blue-500 text-white text-sm
                       font-bold rounded-lg transition-colors duration-200 shadow-sm
                       shadow-blue-200 hover:shadow-blue-300"
          >
            Create Election
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

function Election() {
  const [activeModal, setActiveModal] = useState(null); // "create" | "facussa" | "acc" | "altar"

  const [electionTitle, setElectionTitle] = useState("");
  const [positions, setPositions]         = useState([emptyPosition()]);
  const [accPositions, setAccPositions]   = useState(ACC_POSITIONS);
  const [facussaPositions, setFacussaPositions] = useState([emptyPosition()]);
  const [altarPositions, setAltarPositions]     = useState([emptyPosition()]);

  const modalConfig = {
    create:  { title: "Create Election",        positions: positions,        setPositions: setPositions,        showTitleField: true  },
    facussa: { title: "FACUSSA Election",        positions: facussaPositions, setPositions: setFacussaPositions, showTitleField: false },
    acc:     { title: "AUASA Election",          positions: accPositions,     setPositions: setAccPositions,     showTitleField: false },
    altar:   { title: "Altar Servers Election",  positions: altarPositions,   setPositions: setAltarPositions,   showTitleField: false },
  };

  const active = activeModal ? modalConfig[activeModal] : null;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-24 pb-16">

      {/* Page header */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
          Elections
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
          Create or Choose a Template
        </h1>
        <p className="text-gray-400 text-sm mt-3 max-w-sm">
          Start a new election from scratch or pick one of our pre-built templates to get going faster.
        </p>
      </div>

      {/* Template grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {TEMPLATES.map((t) => (
          <TemplateCard
            key={t.id}
            icon={t.icon}
            label={t.label}
            sub={t.sub}
            onClick={() => setActiveModal(t.id)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && active && (
          <ElectionModal
            key={activeModal}
            title={active.title}
            positions={active.positions}
            setPositions={active.setPositions}
            onClose={() => setActiveModal(null)}
            electionTitle={electionTitle}
            setElectionTitle={setElectionTitle}
            showTitleField={active.showTitleField}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Election;