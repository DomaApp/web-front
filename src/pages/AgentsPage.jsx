import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Plus, Users, X, Pencil } from 'lucide-react'

const inputStyle = {
  width: '100%',
  padding: '0.625rem 0.875rem',
  borderRadius: '0.625rem',
  border: '1px solid var(--color-input-border)',
  background: 'var(--color-input-bg)',
  color: 'var(--color-input-text)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

function Field({ label, id, children }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.375rem' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function AgentsPage() {
  const { t } = useTranslation()
  const [showForm, setShowForm] = useState(false)
  const [editingAgent, setEditingAgent] = useState(null)
  const [agents, setAgents] = useState([])
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingAgent) {
      setAgents(agents.map(a => a.id === editingAgent.id ? { ...form, id: a.id } : a))
    } else {
      setAgents([...agents, { ...form, id: Date.now() }])
    }
    closeForm()
  }

  const openEdit = (agent) => {
    setEditingAgent(agent)
    setForm({ firstName: agent.firstName, lastName: agent.lastName, email: agent.email, phone: agent.phone })
    setShowForm(true)
  }

  const closeForm = () => {
    setEditingAgent(null)
    setForm({ firstName: '', lastName: '', email: '', phone: '' })
    setShowForm(false)
  }

  return (
    <div style={{ padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 0.25rem' }}>
            {t('portal.agents.title')}
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
            {t('portal.agents.subtitle')}
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1rem',
            borderRadius: '0.75rem',
            border: 'none',
            background: 'linear-gradient(135deg, #2B7FFF 0%, #8EC5FF 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          <Plus size={18} />
          {t('portal.agents.addAgent')}
        </button>
      </div>

      {agents.length === 0 ? (
        <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
          <div style={{ 
            width: 48, height: 48, borderRadius: '1rem', 
            background: 'var(--color-nav-bg)', color: 'var(--color-text-secondary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem'
          }}>
            <Users size={24} />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>{t('portal.agents.list.empty')}</p>
        </div>
      ) : (
        <div className="glass-card" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-card-border)' }}>
                <th style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontWeight: 600, fontSize: '0.8rem' }}>
                  {t('portal.agents.form.firstName')} / {t('portal.agents.form.lastName')}
                </th>
                <th style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontWeight: 600, fontSize: '0.8rem' }}>
                  {t('portal.agents.form.email')}
                </th>
                <th style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontWeight: 600, fontSize: '0.8rem' }}>
                  {t('portal.agents.form.phone')}
                </th>
                <th style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontWeight: 600, fontSize: '0.8rem', textAlign: 'right' }}>
                  {t('portal.agents.list.actions')}
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map(agent => (
                <tr key={agent.id} style={{ borderBottom: '1px solid var(--color-card-border)' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                    {agent.firstName} {agent.lastName}
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                    {agent.email}
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                    {agent.phone}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <button
                      onClick={() => openEdit(agent)}
                      style={{
                        padding: '0.4rem 0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-card-border)',
                        background: 'transparent', color: 'var(--color-text-primary)', fontSize: '0.8rem', fontWeight: 600,
                        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem'
                      }}
                    >
                      <Pencil size={14} />
                      {t('portal.agents.list.edit')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Overlay */}
      {showForm && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', 
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', padding: '1rem', zIndex: 100
        }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: 400, padding: '1.5rem', position: 'relative', background: 'var(--color-bg)' }}>
            <button 
              onClick={closeForm}
              style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'transparent', color: 'var(--color-text-secondary)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 1.5rem' }}>
              {editingAgent ? t('portal.agents.editAgent') : t('portal.agents.addAgent')}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <Field label={t('portal.agents.form.firstName')} id="agent-firstName">
                  <input 
                    id="agent-firstName"
                    required style={inputStyle} value={form.firstName} 
                    onChange={e => setForm({...form, firstName: e.target.value})}
                  />
                </Field>
                <Field label={t('portal.agents.form.lastName')} id="agent-lastName">
                  <input 
                    id="agent-lastName"
                    required style={inputStyle} value={form.lastName} 
                    onChange={e => setForm({...form, lastName: e.target.value})}
                  />
                </Field>
              </div>
              <Field label={t('portal.agents.form.email')} id="agent-email">
                <input 
                  id="agent-email"
                  type="email" required style={inputStyle} value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </Field>
              <Field label={t('portal.agents.form.phone')} id="agent-phone">
                <input 
                  id="agent-phone"
                  type="tel" required style={inputStyle} value={form.phone} 
                  onChange={e => setForm({...form, phone: e.target.value})}
                />
              </Field>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button 
                  type="button" onClick={closeForm}
                  style={{
                    flex: 1, padding: '0.625rem', borderRadius: '0.625rem', border: '1px solid var(--color-card-border)',
                    background: 'transparent', color: 'var(--color-text-primary)', fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {t('portal.agents.form.cancel')}
                </button>
                <button 
                  type="submit"
                  style={{
                    flex: 1, padding: '0.625rem', borderRadius: '0.625rem', border: 'none',
                    background: 'linear-gradient(135deg, #2B7FFF 0%, #8EC5FF 100%)',
                    color: '#fff', fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {editingAgent ? t('portal.agents.form.submitEdit') : t('portal.agents.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
