import React, { useState, useEffect } from 'react';
import { Search, Phone, Trash2, Edit3, Save, X, Calendar, User, Mail, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { serverUrl } from "../../App";
import { toast } from 'react-toastify';

const LeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingLead, setEditingLead] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchTerm, statusFilter]);

  const fetchLeads = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/leads/all`);
      setLeads(response.data.leads || []);
    } catch (error) {
      toast.error('Failed to fetch leads');
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = leads;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    setFilteredLeads(filtered);
  };

  const handleDeleteLead = async (leadId) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    try {
      await axios.delete(`${serverUrl}/api/leads/${leadId}`);
      toast.success('Lead deleted successfully');
      fetchLeads();
    } catch (error) {
      toast.error('Failed to delete lead');
      console.error('Error deleting lead:', error);
    }
  };

  const handleUpdateLead = async (leadId, updateData) => {
    try {
      await axios.put(`${serverUrl}/api/leads/${leadId}`, updateData);
      toast.success('Lead updated successfully');
      setEditingLead(null);
      fetchLeads();
    } catch (error) {
      toast.error('Failed to update lead');
      console.error('Error updating lead:', error);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'new': 'bg-blue-100 text-blue-800',
      'contacted': 'bg-yellow-100 text-yellow-800',
      'interested': 'bg-green-100 text-green-800',
      'not-interested': 'bg-red-100 text-red-800',
      'converted': 'bg-purple-100 text-purple-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leads Management</h1>
          <p className="text-gray-600">Manage and track all your contact leads</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="interested">Interested</option>
                <option value="not-interested">Not Interested</option>
                <option value="converted">Converted</option>
              </select>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-end">
              <span className="text-sm text-gray-600">
                Total Leads: <span className="font-bold text-gray-900">{filteredLeads.length}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center">
                        <User size={48} className="text-gray-300 mb-4" />
                        <p>No leads found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {lead.firstName} {lead.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.service}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate" title={lead.message}>
                          {lead.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingLead === lead._id ? (
                          <select
                            value={lead.status}
                            onChange={(e) => {
                              const updatedLead = { ...lead, status: e.target.value };
                              setLeads(leads.map(l => l._id === lead._id ? updatedLead : l));
                            }}
                            className="text-xs px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="interested">Interested</option>
                            <option value="not-interested">Not Interested</option>
                            <option value="converted">Converted</option>
                          </select>
                        ) : (
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{formatDate(lead.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          {/* Call Button */}
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                            title="Call"
                          >
                            <Phone size={16} />
                          </a>

                          {/* Edit/Save Button */}
                          {editingLead === lead._id ? (
                            <button
                              onClick={() => handleUpdateLead(lead._id, { status: lead.status, notes: lead.notes })}
                              className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                              title="Save"
                            >
                              <Save size={16} />
                            </button>
                          ) : (
                            <button
                              onClick={() => setEditingLead(lead._id)}
                              className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                              title="Edit"
                            >
                              <Edit3 size={16} />
                            </button>
                          )}

                          {/* Cancel Button */}
                          {editingLead === lead._id && (
                            <button
                              onClick={() => {
                                setEditingLead(null);
                                fetchLeads(); // Reset to original data
                              }}
                              className="text-gray-600 hover:text-gray-900 p-1 rounded hover:bg-gray-50"
                              title="Cancel"
                            >
                              <X size={16} />
                            </button>
                          )}

                          {/* Delete Button */}
                          <button
                            onClick={() => handleDeleteLead(lead._id)}
                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Notes Section */}
        {editingLead && (
          <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Edit Notes</h3>
            {leads.filter(lead => lead._id === editingLead).map(lead => (
              <div key={lead._id}>
                <textarea
                  value={lead.notes || ''}
                  onChange={(e) => {
                    const updatedLead = { ...lead, notes: e.target.value };
                    setLeads(leads.map(l => l._id === lead._id ? updatedLead : l));
                  }}
                  placeholder="Add notes about this lead..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsPage;
