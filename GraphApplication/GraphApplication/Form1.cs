using System;
using System.Linq;
using System.Windows.Forms;

namespace GraphApplication
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            UpdatePlaceholderVisibility();
        }

        private void txtDataInput_TextChanged(object sender, EventArgs e)
        {
            UpdatePlaceholderVisibility();
        }

        private void txtDataInput_GotFocus(object sender, EventArgs e)
        {
            lblPlaceholder.Visible = false;
        }

        private void txtDataInput_LostFocus(object sender, EventArgs e)
        {
            UpdatePlaceholderVisibility();
        }

        private void lblPlaceholder_Click(object sender, EventArgs e)
        {
            txtDataInput.Focus();
        }

        private void UpdatePlaceholderVisibility()
        {
            lblPlaceholder.Visible = string.IsNullOrEmpty(txtDataInput.Text);
        }

        private void btnDrawChart_Click(object sender, EventArgs e)
        {
            // Parse the input data
            var input = txtDataInput.Text;
            var values = input.Split(',')
                              .Select(s => double.TryParse(s, out var n) ? n : 0)
                              .Where(n => n > 0)
                              .ToList();

            if (values.Count > 0)
            {
                pieChartControl.SetData(values);
            }
            else
            {
                MessageBox.Show("Please enter valid numbers separated by commas.");
            }
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
