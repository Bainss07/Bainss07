using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Game_Tic_Tac_Toe_
{
    public partial class Game : Form
    {
        char who = 'o';
        short movement = 0;
        public Game()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void newGameToolStripMenuItem_Click(object sender, EventArgs e)
        {
            who = 'o';
            b1.Enabled = true; b1.Text = "";b1.BackColor = Color.White;
            b2.Enabled = true; b2.Text = "";b2.BackColor = Color.White;
            b3.Enabled = true; b3.Text = "";b3.BackColor = Color.White;
            b4.Enabled = true; b4.Text = "";b4.BackColor = Color.White;
            b5.Enabled = true; b5.Text = "";b5.BackColor = Color.White;
            b6.Enabled = true; b6.Text = "";b6.BackColor = Color.White;
            b7.Enabled = true; b7.Text = "";b7.BackColor = Color.White;
            b8.Enabled = true; b8.Text = "";b8.BackColor = Color.White;
            b9.Enabled = true; b9.Text = "";b9.BackColor = Color.White;
            tableLayoutPanel1.Enabled = true;
        }


        private void button_Click(object sender, EventArgs e)
        {
            Button bt = sender as Button;
            bt.Enabled = false;
            bt.BackColor = Color.LightGoldenrodYellow;
            if(who == 'o')
            {
                bt.Text = "O";
                if((b1.Text == b2.Text && b2.Text == b3.Text && b2.Text != "") ||
                    (b4.Text == b5.Text && b5.Text == b6.Text && b5.Text != "") ||
                    (b7.Text == b8.Text && b8.Text == b9.Text && b8.Text != "") ||
                    (b1.Text == b4.Text && b4.Text == b7.Text && b4.Text != "") ||
                    (b2.Text == b5.Text && b5.Text == b8.Text && b5.Text != "") ||
                    (b3.Text == b6.Text && b6.Text == b9.Text && b6.Text != "") ||
                    (b1.Text == b5.Text && b5.Text == b9.Text && b5.Text != "") ||
                    (b3.Text == b5.Text && b5.Text == b7.Text && b5.Text != ""))
                {
                    MessageBox.Show(($"The winer is {who.ToString().ToUpper()} !!!"));
                    tableLayoutPanel1.Enabled = false;
                }
                else if(movement == 8)
                {
                    MessageBox.Show("Draw !!");
                }
                who = 'x';
            }
            else if(who == 'x')
            {
                bt.Text = "X";
                if ((b1.Text == b2.Text && b2.Text == b3.Text && b2.Text != "") ||
                    (b4.Text == b5.Text && b5.Text == b6.Text && b5.Text != "") ||
                    (b7.Text == b8.Text && b8.Text == b9.Text && b8.Text != "") ||
                    (b1.Text == b4.Text && b4.Text == b7.Text && b4.Text != "") ||
                    (b2.Text == b5.Text && b5.Text == b8.Text && b5.Text != "") ||
                    (b3.Text == b6.Text && b6.Text == b9.Text && b6.Text != "") ||
                    (b1.Text == b5.Text && b5.Text == b9.Text && b5.Text != "") ||
                    (b3.Text == b5.Text && b5.Text == b7.Text && b5.Text != ""))
                {
                    MessageBox.Show(($"The winer is {who.ToString().ToUpper()} !!!"));
                    tableLayoutPanel1.Enabled = false;
                }
                else if (movement == 8)
                {
                    MessageBox.Show("Draw !!");
                }
                who = 'o';

            }
            movement++;
        }
    }
}
